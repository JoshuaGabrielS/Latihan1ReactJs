import React, { Component } from "react";
import { Table } from 'antd';

class TableSaya2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "nomorPr4": "PR4-2023-001",
                    "tanggalPr4": "2023-07-24T05:34:56.000+00:00",
                    "nilaiPajakRokok": 5000000,
                    "saldoPr4": 1000000
                }
                // Add more data objects as needed
            ],
            loading: false, // Set loading to false since we are providing static data
        };
    }

    render() {
        const columns = [
            {
                title: 'Nomor PR4',
                dataIndex: 'nomorPr4',
                key: 'nomorPr4',
            },
            {
                title: 'Tanggal PR4',
                dataIndex: 'tanggalPr4',
                key: 'tanggalPr4',
            },
            {
                title: 'Nilai Pajak Rokok',
                dataIndex: 'nilaiPajakRokok',
                key: 'nilaiPajakRokok',
                render: nilaiPajakRokok => <span>{nilaiPajakRokok}</span>,
            },
            {
                title: 'Saldo PR4',
                dataIndex: 'saldoPr4',
                key: 'saldoPr4',
                render: saldoPr4 => <span>{saldoPr4}</span>,
            },
            // Add more columns as needed
        ];

        return (
            <Table
                columns={columns}
                dataSource={this.state.data}
                loading={this.state.loading}
                rowKey="nomorPr4" // Use a unique key from your data
            />
        );
    }
}

export default TableSaya2;
