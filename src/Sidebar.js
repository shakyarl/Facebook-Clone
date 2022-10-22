import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@mui/icons-material';
import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
    return <div className='sidebar'>
        <SidebarRow src= 'https://scontent.fluk1-1.fna.fbcdn.net/v/t1.18169-9/14522821_587175708153167_6354002634555991139_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cpBTIp97jT0AX9pQBrm&_nc_oc=AQl5l6uGXKQz9AMYI15Wanya7XhvecTnmE44xsjTSpTR-MV94Eq-UtiprtpjJ9Hjvf5h_Q53XHPvzs3wgYp9HVBp&_nc_ht=scontent.fluk1-1.fna&oh=00_AT8CQnIuND3OjJ9jkxC21phX9ogNnzRsQW2h9IxG7_aRRw&oe=6379EB27'
            title='Rahul Shakya' />
        <SidebarRow Icon={LocalHospital}
            title ='Covid-19 Information Center' />
        <SidebarRow Icon={EmojiFlags}
            title='Pages' />
        <SidebarRow Icon={People}
            title='Friends' />
        <SidebarRow Icon={Chat}
            title='Messenger' />
        <SidebarRow Icon={Storefront}
            title='Marketplace' />
        <SidebarRow Icon={VideoLibrary}
            title='Videos' />
        <SidebarRow Icon={ExpandMoreOutlined}
            title='Marketplace' />
    </div>;
  
}

export default Sidebar