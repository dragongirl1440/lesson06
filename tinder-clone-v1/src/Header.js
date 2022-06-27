import React from 'react';
import './Header.css';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <AccountCircleSharpIcon fontSize='large' className='header-icon' alt='your profile icon' />
            </IconButton>

            <img
                className='header-logo'
                id='tinder-logo'
                src='https://www.tinderpressroom.com/file.php/178055/flame-gradient-RGB_1000px.jpg'
                alt='tinder logo'
                width='50px'
            />

            <IconButton>
                <ForumIcon fontSize='large' className='header-icon' alt='your messages' />
            </IconButton>
        </div>
    )
}

export default Header;