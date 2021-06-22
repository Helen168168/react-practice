const objCustomerData = {

    dataSource: [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ],

    columns: [
        {
            title: '客户名称',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: '联系人姓名',
            dataIndex: 'customerContant',
            key: 'customerContant',
        },
        {
            title: '联系电话',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: '客户类型',
            dataIndex: 'customerTypeText',
            key: 'customerTypeText',
        },
        {
            title: '客户类别',
            dataIndex: 'customerClassText',
            key: 'customerClassText',
        },
        {
            title: '客户来源',
            dataIndex: 'customerSourceText',
            key: 'customerSourceText',
        },
        {
            title: '从事行业',
            dataIndex: 'industryText',
            key: 'industryText',
        },

        {
            title: '负责人',
            dataIndex: 'sellUserName',
            key: 'sellUserName',
        },
        {
            title: '状态',
            dataIndex: 'auditStatusText',
            key: 'auditStatusText',
        },
        
    ],

    arrFormData: [
        {
            type: 'input',
            model: 'name',
            palceholder: '请输入客户名称',
            label: '客户名称',
            arrOptionData: ''

        },
        {
            type: 'select',
            label: '客户类型',
            model: 'customerTypes',
            palceholder: '请选择客户类型',
            arrOptionData: 'customerTypeList'
        },
        {
            type: 'select',
            label: '客户类别',
            model: 'customerCategories',
            arrOptionData: 'customerClassList',
            palceholder: '请选择客户类别'
        },
        {
            type: 'select',
            label: '负责人',
            model: 'sellUserIds',
            arrOptionData: 'sellUserList',
            palceholder: '请选择负责人'
        },
              
    ]
}

export default objCustomerData