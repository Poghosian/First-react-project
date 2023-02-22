import React from "react";
import s from './users.module.css'
import axios from "axios";
import userImg from '../../assets/images/pers.jpg'
import {setUsersAC} from "../../redux/users-reducer";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(50)
        })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    changePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return <div>
            {
                this.props.users.map(u => <div className={s.d_flex} key={u.id}>
                <span>
                    <div className={s.img_block}>
                        <img src={u.photos.small ? u.photos.small : userImg}/>
                    </div>
                    <div>
                        {
                            u.followed ?
                                <button onClick={() => this.props.unfollow(u.id)}>Follow</button> :
                                <button onClick={() => this.props.follow(u.id)}>Unfollow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
            <div className={s.paginateBlock}>
                {
                    pages.map(p => {
                        return <span onClick={e => {
                            this.changePage(p)
                        }} className={`${s.pagination} ${this.props.currentPage === p ? s.currentPage : ''}`}
                                     key={p}>{p}</span>
                    })
                }
            </div>
        </div>
    }
}

export default Users;