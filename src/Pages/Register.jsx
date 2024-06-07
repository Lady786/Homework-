import React from 'react';
import { Card } from 'antd';
import { Input } from 'antd';
import { Button, Flex } from 'antd';
const Register = () => (
  <Card className='m-auto mt-[300px] bg-gray-300'
    title="Register"
    bordered={false}
    style={{
      width: 300,
    }}
  >
   <form className='flex flex-col justify-around h-[200px]'>
   <Input placeholder="UserName" />
   <Input placeholder="Email" />
   <Input placeholder="Password" />
   <Button  type="primary">Register</Button>
   </form>
  </Card>
);
export default Register;