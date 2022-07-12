import React from 'react';
import  './AdminCms.css'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HideSourceIcon from '@mui/icons-material/HideSource';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import WebhookIcon from '@mui/icons-material/Webhook';
const AdminCms = () => {
    return (
        <div>
            <div className='main-admincms'>
                <div className='Risk'>
                    <NotInterestedIcon />
                    <h3>Risk Factors</h3>
                </div>
                <div className='recommend'>
                    <WebhookIcon />
                    <h3>Recommendations</h3>
                </div>
                <div className='health'>
                    <LocalHospitalIcon />
                    <h3>Chronic Health Conditions</h3>
                </div>
                <div className='articles'>
                    <AttachFileIcon />
                    <h3>Articles</h3>
                </div>
            </div>
        </div>
    );
};

export default AdminCms;