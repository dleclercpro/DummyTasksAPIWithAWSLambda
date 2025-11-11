import { APIGatewayProxyEvent, APIGatewayProxyEventV2, APIGatewayProxyResult } from 'aws-lambda';
import { generateDummyTasks } from './tasks';

export const handler = async (event: APIGatewayProxyEvent | APIGatewayProxyEventV2): Promise<APIGatewayProxyResult> => {
  // Support both REST API (v1.0) and HTTP API (v2.0) formats
  const method = ('httpMethod' in event 
    ? event.httpMethod 
    : event.requestContext?.http?.method || 'GET').toUpperCase();
  
  const dummyTasks = generateDummyTasks();
  const taskTitles = dummyTasks.map(task => task.title);

  switch (method) {
    case 'GET':
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
