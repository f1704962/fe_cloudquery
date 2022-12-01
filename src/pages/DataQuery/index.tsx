import LightDragable from '@/components/light-dragable';
import MonacoSqlEditor from '@/components/monaco-sql-editor';
import { CarryOutOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Tabs, Tree } from 'antd';
import type { DirectoryTreeProps } from 'antd/es/tree';
import { useMemo, useState } from 'react';
import './index.less';

const { DirectoryTree } = Tree;
const { TabPane } = Tabs;
export default function DataQuery() {

  const [close, setClose] = useState<boolean>();

  const defaultPanes = useMemo(() => {

    return (
      new Array(1).fill(null).map((_, index) => {
        const id = String(index + 1);
        return {
          label: `SQL console `,
          children:
            <MonacoSqlEditor
              isSqlExecuteBtn={true}
              isSqlBueatifyBtn={true}
              isSqlExecutePlanBtn={true}
              // tableFields={tableFields}
              tableFields={[]}
              // initValue={firstInitSqlValue || "select * from user limit 10"}
              initValue={"select * from user limit 10"}
              // executLoading={sqlLoading}
              // subChange={(params: { sqlContent: string, sqlType: string }) => querySqlResult(params)}
              subChange={(params: { sqlContent: string, sqlType?: string }) => { }}
              implementDisabled={true}
            />,
          key: id
        };
      })
    )
  }, []);

  const onAdd = () => {
    let initsql = "select * from user limit 10"
   
    // addSqlConsole
    // setInitSqlValue(initsql)
    // setAddCount(count => count + 1)
  }
  
  const dataSourceTree = () => {

    const dataSource: any = [
      {
        id: 1,
        type: 1, //代表类型为数据源
        name: '数据源1',
        children: [
          {
            id: 11,
            type: 2, //代表类型为表
            name: '数据库1',
            children: [
              {
                id: 111,
                type: 3, //代表类型为表
                name: '数据表1',
              },
              {
                id: 122,
                type: 3, //代表类型为表
                name: '数据表2',
              }
            ]
          },
          {
            id: 12,
            type: 2, //代表类型为表
            name: '数据库2',
          }
        ]
      },
      {
        id: 2,
        type: 1, //代表类型为数据源
        name: '数据源2',
      },
    ];

    function renderDataSource(dataSource: any[]) {

      if (dataSource?.length > 0) {
        return (
          <> {
            dataSource?.map(item => <Tree.TreeNode title={item?.name} key={item?.id} icon={item?.type === 1 ? <CarryOutOutlined /> : <></>}>
              {renderDataSource(item?.children)}
            </Tree.TreeNode>)}
          </>
        )
      }
      else {
        return <></>
      }
    }

    const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
      console.log('Trigger Select', keys, info);
    };

    const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
      console.log('Trigger Expand', keys, info);
    };


    return (
      <div className='tree-container'>
        <DirectoryTree
          multiple
          onSelect={onSelect}
          onExpand={onExpand}
          // treeData={treeData}
          defaultExpandAll={false}
        >
          {renderDataSource(dataSource)}
        </DirectoryTree>
      </div>
    )
  }

  const tableDesk = () => {
    const [sqlItems, setSqlItems] = useState(defaultPanes);
    const [sqlConsoleActiveKey, setSqlConsoleActiveKey] = useState(defaultPanes[0].key);
    const onSqlEdit = (targetKey: any, action: 'add' | 'remove') => {
      if (action === 'add') {
        // addSql;
      } else {
        // removeSql(targetKey);
      }
    };
    const onSqlChange = (key: string) => {
      setSqlConsoleActiveKey(key);
      let resultKey = Number(key.substring(6)) + 1
      if (key === "1") {
        // setResultActiveKey(`newTab0`)
      }
      if (key !== "1") {
        // setResultActiveKey(`newTab${resultKey}`)
      }

    };
    return (
      <>
        <div style={{ height: '100%' }}>
          <Tabs
            size="small"
            hideAdd
            onChange={onSqlChange}
            activeKey={sqlConsoleActiveKey}
            type="editable-card"
            className="sql-console-tabs"
            onEdit={onSqlEdit}
            tabBarExtraContent={
              <span className="add-btn" ><a><PlusCircleOutlined style={{ fontSize: 20 }} onClick={onAdd} /></a></span>}
          >
            {sqlItems?.map((item: any) => (
              <TabPane tab={item.label} key={item.key} >
                {item.children}
              </TabPane>
            ))}
          </Tabs>
        </div>
      </>
    )
  }

  return (
    <PageContainer className='container' ghost title={<></>}>
      <LightDragable
        showIcon={true}
        leftContent={dataSourceTree()}
        rightContent={tableDesk()}
        initWidth={300}
        least={20}
        getIconAction={(close: boolean) => {
          setClose(close)
        }}
      />
    </PageContainer>
  );
};

