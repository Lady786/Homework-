import React from 'react';
import { Card } from 'antd';
import { Input } from 'antd';
import { Button, Flex } from 'antd';
const Login = () => (
  <Card className='m-auto mt-[300px] bg-gray-300'
    title="Register"
    bordered={false}
    style={{
      width: 300,
    }}
  >
   <form className='flex flex-col justify-around h-[150px]'>
  
   <Input placeholder="Email" />
   <Input placeholder="Password" />
   <Button  type="primary">LogIn</Button>
   </form>
  </Card>
);
export default Login;