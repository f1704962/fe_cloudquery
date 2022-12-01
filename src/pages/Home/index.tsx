import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Card, Col, Row } from 'antd';
import './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={'container'}>
        <Guide name={trim(name)} />
        <div className="site-card-wrapper" >
          <Row gutter={16}>
            <Col span={8}>
              <Card title="操作手册" bordered={false} style={{ height: 400 }}>
                查看操作手册详情
              </Card>
            </Col>
            <Col span={8}>
              <Card title="添加数据源" bordered={false} style={{ height: 400 }} extra={<Button type='primary'>新增</Button>}>
                当前支持MySQL、PostgresSQL等多种数据源
              </Card>
            </Col>
            <Col span={8}>
              <Card title="其他" bordered={false} style={{ height: 400 }}>
                其他内容
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
