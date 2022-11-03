import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from  './Navbar.module.css';
const Navbar = () => {
    const menuList =['남성','Divided','여성','신생아/육아','아동','H&M HOME','Sale','지속가능성'];
    return (
        <div>
            <div>
                <div className={styles.loginButton}> 
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    <div>로그인</div>
                </div>               
            </div>
            <div className={styles.navSection}>
                <img alt="이미지"width={100}src="https://i.pinimg.com/originals/ed/a6/46/eda6460f07dcec2a864498ab223deec9.jpg"/>
            </div>
            
                <div className ={styles.menuSection}>
                    <ul className={styles.menuList}>
                        {menuList.map((menu) =><li>{menu}</li>)}
                    </ul>
                    
                    <div className={styles.searchBar}>
                        <input type="text" placeholder="제품 검색" ></input>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    
                    </div>                      
                </div>
       </div>
    );
};

export default Navbar;