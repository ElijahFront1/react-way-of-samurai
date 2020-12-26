import React from 'react';
import s from './ProfileInfo.module.css'

function ProfileInfo(params) {
    return (
        <div>
            <div>
                <div className={s.profile}>
                    <img src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic4_zoom-1500x1500-7036.jpg" alt="img"></img>
                </div>
                <div>
                    ava + discription
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo; 