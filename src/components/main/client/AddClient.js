import { Button, Input, Modal , Select, Space } from 'antd';
// import { Option } from 'antd/es/mentions';
// import { Option } from 'antd/es/mentions';
// import axios from 'axios';
import { useState } from 'react';
// let JWTTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJhZG1pbiIsImlhdCI6MTY3ODQ0NjU1Mn0.vsg37gZ-pPRq4qDKrTg9mswSuZ3Ij1RjRBiJ9mafig4' ;



const AddClient = () => {
  // const [options, setOptions] = useState([]);
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add
      </Button>
      <Modal
        title="Add Client"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <Input placeholder="Client Title" />
      </Modal>
    </>
  );
};
export default AddClient;