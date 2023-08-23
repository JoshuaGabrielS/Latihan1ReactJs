import { Component } from "react";
import { Table, Tooltip, Input, Button } from 'antd';
import {HiOutlineEye, HiSearch} from "react-icons/hi";



class SaldoBck extends Component{
    constructor (props){
        super(props)
        this.state = {
            searchText: '',
            searchedColumn: '',
            data: [
                {
                    kodeKantor: '070600',
                    kantor: 'KPPBC TMP A Sidoarjo',
                    nppbkc: '0715130123',
                    perusahaan: 'PT. ABCDEFG',
                    nomorCk1: '000123',
                    tanggalCk1: '03-01-2023',
                    merek: 'Bintang Botol',
                    saldo: '10.000'
                },
                {
                    kodeKantor: '070600',
                    kantor: 'KPPBC TMC Malang',
                    nppbkc: '0706130123',
                    perusahaan: 'PT. ABC Jaya',
                    nomorCk1: '000098',
                    tanggalCk1: '12-03-2023',
                    merek: 'Bintang Rasa Lemon',
                    saldo: '1.500'
                }
            ],
            loading: false,
        }
    };

    // Search Kolom
	getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
			<div style={{ padding: 8 }}>
				<Input
					ref={(node) => {
						this.searchInput = node;
					}}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
					style={{ width: 188, marginBottom: 8, display: 'block' }}
				/>
				<Button
					type='primary'
					onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
					icon='search'
					size='small'
					style={{ width: 90, marginRight: 8 }}
				>
					Search
				</Button>
				<Button onClick={() => this.handleResetSearch(clearFilters)} size='small' style={{ width: 90 }}>
					Reset
				</Button>
			</div>
		),
		filterIcon: (filtered) => <HiSearch type='search' style={{ color: filtered ? '#1890ff' : undefined }} />,
		onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
		onFilterDropdownVisibleChange: (visible) => {
			if (visible) {
				setTimeout(() => this.searchInput.select());
			}
		},
	});

	handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		this.setState({
			searchText: selectedKeys[0],
			searchedColumn: dataIndex,
		});
	};

	handleResetSearch = (clearFilters) => {
		clearFilters();
		this.setState({ searchText: '' });
	};

    render(){
        const columns = [
            {
                title: 'Aksi',
                dataIndex: 'aksi',
                key: 'aksi', 
                render: (record) => {
                    return (
                        <>
                            <Tooltip title="Detail">
                                <HiOutlineEye
                                    type="folder-open"
                                    style={{ fontSize: 20, cursor: "pointer" }}
                                    // onClick={() => this.props.history.push({
                                    //     pathname: '/setting-detail',
                                    //     search: `view=true&idBisnisProses=${record.idBisnisProses}`
                                    // })}
                                />
                            </Tooltip>
                        </>
                        
                            )
                        }
                
            },
            {
                title: 'Kode Kantor',
                dataIndex: 'kodeKantor',
                key: 'kodeKantor',
                ...this.getColumnSearchProps('kodeKantor'),
                render: (text) => <div style={{ textAlign: 'center' }}>{text.toString()}</div>,
            },
            {
                title: 'Kantor',
                dataIndex: 'kantor',
                key: 'kantor',
                ...this.getColumnSearchProps('kantor'),
            },
            {
                title: 'NPPBKC',
                dataIndex: 'nppbkc',
                key: 'nppbkc',
                ...this.getColumnSearchProps('nppbkc'),
            },
            {
                title: 'Perusahaan',
                dataIndex: 'perusahaan',
                key: 'perusahaan',
                ...this.getColumnSearchProps('perusahaan'),
            },
            {
                title: 'Nomor Ck1-C',
                dataIndex: 'nomorCk1',
                key: 'nomorCk1',
                ...this.getColumnSearchProps('nomorCk1'),
            },
            {
                title: 'Tanggal Ck1-C',
                dataIndex: 'tanggalCk1',
                key: 'tanggalCk1',
                ...this.getColumnSearchProps('tanggalCk1'),
            },
            {
                title: 'Merek',
                dataIndex: 'merek',
                key: 'merek',
                ...this.getColumnSearchProps('merek'),
            },
            {
                title: 'Saldo (Liter)',
                dataIndex: 'saldo',
                key: 'saldo',
                ...this.getColumnSearchProps('saldo'),
            },
        ]

    return(
        <Table
            columns={columns}
            dataSource={this.state.data}
            loading={this.state.loading}
            rowKey="kodeKantor"
        />
        );
    }
}

export default SaldoBck;
