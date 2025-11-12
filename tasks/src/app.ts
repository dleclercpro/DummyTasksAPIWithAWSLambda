import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { generateDummyTasks } from './tasks';

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
  const { method } = event.requestContext.http;

  switch (method) {
    case 'GET':
      const dummyTasks = generateDummyTasks();
      const taskTitles = dummyTasks.map(task => task.title);

      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskTitles, null, 2),
      };
    
    default:
      return {
        statusCode: 405,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Method not allowed. Only GET requests are supported.',
        }),
      };
  }
};
