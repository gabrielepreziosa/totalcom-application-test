import type { Metadata } from 'next'
import { Alert, Card, Col, Row } from 'antd';
import Layout from '../../../components/Layout/Layout';
import { getClient } from '../../../lib/client';
import { EventInterface } from '../../../types/DataModelTypes/EventInterface';
import pageQuery from './_queries/pageQuery';
import Header from './_components/Header/Header';
import Program from './_components/Program/Program';
import { useQuery } from '@apollo/client';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Event | ${process.env.NEXT_PUBLIC_APP_NAME}`
    }
}
export default async function Event({
    params
}: {
    params: { id: string }
}) {

    try {

        /*const { data } = await getClient().query<{ node: EventInterface }>({
            query: pageQuery,
            context: {
                fetchOptions: {
                    next: { revalidate: 60 }
                },
            },
            variables: {
                id: decodeURIComponent(params.id)
            }
        });*/

        let data = {
            "node": {
            "id": "QXBwXERvY3VtZW50XEV2ZW50fDY2OTdjODgzMTNlMmQ4YmUwNTBmODhmNA==",
            "name": "perferendis",
            "date": "2024-07-24T15:34:59+02:00",
            "program": [
                {
                "speaker": "Grady Kohler",
                "startTime": 707,
                "endTime": 827,
                "__typename": "Speech"
                },
                {
                "speaker": "Laron Thompson",
                "startTime": 711,
                "endTime": 820,
                "__typename": "Speech"
                },
                {
                "speaker": "Araceli Stoltenberg",
                "startTime": 1000,
                "endTime": 1089,
                "__typename": "Speech"
                },
                {
                "speaker": "Marco Pfeffer",
                "startTime": 1013,
                "endTime": 1073,
                "__typename": "Speech"
                }
            ]
            }
        };
        

        return (
            <Layout>
                <Row gutter={16} justify="center">
                    <Col xs={24} sm={20} md={16} lg={14} xl={10} xxl={8}>
                        <Header event={data.node} />
                        <Card title="Program">
                            <Program program={data.node.program} />
                        </Card>
                    </Col>
                </Row>
            </Layout>
        );

    } catch (error) {

        console.error("Error fetching data:", error);
        return (
            <Alert message="Error" description="Failed loading event data, retry..." type="error" showIcon />
        );

    }
}
