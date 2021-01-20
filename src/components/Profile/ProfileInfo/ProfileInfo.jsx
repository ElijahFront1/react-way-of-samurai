import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css'

function ProfileInfo(props) {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <div className={s.profile}>
                    <img src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic4_zoom-1500x1500-7036.jpg" alt="img"></img>
                </div>
                <div>
                    <img src={props.profile.photos.large} />
                    ava + discription
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo; 