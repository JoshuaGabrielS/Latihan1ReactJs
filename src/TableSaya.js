import React, { Component } from "react";
import { Table } from 'antd';
import axios from 'axios';

class TableSaya extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
        };
    }

    componentDidMount() {
        const apiUrl = 'https://apisdev-gw.beacukai.go.id/cukai-pelunasan-service/sppr/getSpprByKodeKantor?kodeKantor=KANTOR&limit=10&page=1';
        const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJySDN6VVB6ZGFqT2E4WEdQeVlsNVloaWRFblpFZ1hSVlVJc3BaSEthY0xVIn0.eyJleHAiOjE2ODM4NjUxMzcsImlhdCI6MTY4Mzg2NDIzNywianRpIjoiYTVmNzE4YWItNTJiOC00NmVjLWExODEtNWQ5YzNmN2IzY2I5IiwiaXNzIjoiaHR0cDovL2FjY291bnQtZGV2LmJlYWN1a2FpLmdvLmlkL2F1dGgvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIxZmQ0MDMyOS04ODY5LTQzY2YtYjkxNy1mYTBkOTZlY2I2NzIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzbWFydF9jdXN0b20iLCJzZXNzaW9uX3N0YXRlIjoiNzBlMDcyMWItYjU0ZS00N2YxLWIwMWYtMDBmZjEzNjZiOTkyIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIiwiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBvZmZsaW5lX2FjY2VzcyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuaXAiOiIxOTkwMTIyMzIwMTAwMTEwMDMiLCJuYW1lIjoiR0FURSBQUklPSyIsInByZWZlcnJlZF91c2VybmFtZSI6ImdhdGUucHJpb2siLCJnaXZlbl9uYW1lIjoiR0FURSIsImZhbWlseV9uYW1lIjoiUFJJT0siLCJlbWFpbCI6ImdhdGUucHJpb2tAZ21haWwuY29tIn0.VZUUH4kbDw-SVjyqnL36pvThWIxhROp-i68cZYGW7X2sdlVjxoVg5XrhbIuGdhS6fPcr-gV6iYMFImYoqi-udVYn8xFFwfF70O9yoew4UqBBVV_AxoiE7RR2j393s5ZM1reoB6No3rTuYAHXn_NJVigSJ9BQV7sQKNeSBWf6CqReTqNxxF0rbJsnCaKT9t8dJlJRLzGp0Qxz4uHcQvqSNIBpXUt8YyV76t6wFIH54MCYIpyiXTC_zFNkWNkBjcpVHYBwMMCI2Ajt7BplhqvQFIGV4dnTSVF21eXKiLSJoM2e5qtKfR7MpvqpIM375fGsk-h6O0D7krM0GyopuuvKyw'; // Replace with your actual bearer token
        const apiKey = '2f1313cf-e4e6-4172-926b-6ee720182f7a'; // Replace with your actual apiKey
        
        axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Beacukai-api-key': apiKey,
            }
        })
        .then(response => {
            const spprList = response.data.data.listData;
            this.setState({
                data: spprList,
                loading: false,
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            this.setState({
                loading: false,
            });
        });
    }

    render() {
        const columns = [
            {
                title: 'Nomor SPPR',
                dataIndex: 'nomorSppr',
                key: 'nomorSppr',
            },
            {
                title: 'Nama Perusahaan',
                dataIndex: 'namaPerusahaan',
                key: 'namaPerusahaan',
            },
            {
                title: 'Nilai SPPR',
                dataIndex: 'nilaiSppr',
                key: 'nilaiSppr',
            },
            {
                title: 'Nomor CK1',
                dataIndex: 'nomorCk1',
                key: 'nomorCk1',
            },
            {
                title: 'Tanggal CK1',
                dataIndex: 'tanggalCk1',
                key: 'tanggalCk1',


            },
            // Add more columns as needed
        ];

        return (
            <Table
                columns={columns}
                dataSource={this.state.data}
                loading={this.state.loading}
                rowKey="idSppr" // Use a unique key from your data
            />
        );
    }
}

export default TableSaya;
