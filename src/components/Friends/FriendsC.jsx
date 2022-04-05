import React from "react";
import s from './Friends.module.css'
import * as axios from 'axios'

class FriendsC extends React.Component{
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUser(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUser(response.data.items);
        })
    }

    render() {

        let pageCount = Math.ceil(this.props.totalFriendsCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pageCount; i++){
            pages.push(i);
        }



        return <div>
           <div className={s.pages}>{pages.map(p => {
               return <span className={this.props.currentPage === p && s.selectedPage}  
               onClick={(e) => {this.onPageChanged(p) }}>{p}</span>
           })}</div>
           {
           this.props.friends.map(u => <div key={u.id}>
            <span>
                <div>
                   <img className={s.avatar} src={u.photos.small != null ? u.photos.small : u.photos.small = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAD5+fmXl5fl5eX8/Pzt7e3q6upPT0/Pz8+SkpLg4OBWVlbJycm9vb2ampqnp6e3t7fW1tby8vIyMjKHh4etra0KCgrDw8MeHh52dnZlZWU3Nzfc3Nw+Pj4tLS1FRUUZGRlvb28mJiZ/f3+Li4tycnJeXl4TExMcHBxSUlL5OWKpAAAINElEQVR4nO2d2WLiOgxAhwAJAZoVwhKWAKXQ+f8PvE077WDZzirZZq7PO95iS7IsiV+/LBaLxWKxWCwWi8VisVgsFovFYrG0IfVmQTS8LkuuwyiYeanuIeEx3mfb+WUAucy3WeLoHlx/vGy+4Sb3l9M8G+keYh9G4alidt+8D2e6B9qNNJ40mN4Xk+z5TqW3vDeeX8l9+Vy71Tu3mt4X5+eZo7vtML+Srat76I1wwo7zKwnHuodfj7/oMcHB4PiiewI1OF036F/ejLYCfN50ac/G1z0NOUOE+ZUMdU9EwjhHmuBgkBspcLyaHbrZzbfTKIuzaLqd76qM1Q8unu7p8CSrigHPl+s9K0Cc/Xo5r/jFKtE0Dykv8sFu1zJF7gYVotcwtbGWjXMS1PwykNrnayUjb4hsgtsm96LZq/lT9MUjXDYVF95V3IAxinEmHN6tzVVhJNY0hlyN3ZNgbJu2guJFpD9OZlw2DoKhbdur7LHoOB4IxtsakcCvE6BiAtFSIY+2Axk/qmNXg2R05BvLUEfbAYGUufVo7sY3p1vaFMj7it/zBco4O8N7LF57tsjLmxBlpB0ZIX/BEv4r6vTBcTblG0KjnCdygtBoRzjxPkdplrtVdVM+CIyhW+2O45tPobt8oevKH8G1xhLsnAqKkBpuiXMiGwdcu3c9HkY4jD6aHgI1v56PCLcSpvPIg40jtt2YmHSZ4QaJUVtvBrDXFsjNAzldIDffgD1YZGzXGHTe7ZHbrwfYj7/ROwD20hK9gxoccJXDdxoB99ZRtcIA/VOYjuCgq3a8LdnuKUQdENaqtynrGSOxOZx3po8NQRcVgIshzfqCfaL2mgj8TzQPRQnbiVqfFHBRE/XCdpIT9dKkbyohALYpUS9CwDGkeiQCT1oqDyIwqajC7lK2G5VvpqwTsSDrh30SUXlJZN1hfV2kcljj90zWDw9rFdO5bNm9otKruGN6prMYWet3R9YPh8vaU3RvJ6zT7V1dIDGrLFZ00T0eG6SjTl2wS3uhW9qUjbNS99DGejAOdB7pMasu1Hky2BkWhD0VRsyQUohP7AyJ+L/tUsqYFzMkDaGfD/gs1WkLVuPf6UKzXPatVJ3GV9Yxu5QKo9zA5qELWGZ9USofu1kRR+cEY116BVk/PKyrjc4bzd6AVTrbpkzPODEmIti4E5WJJsAJRqUuHLYblXHf4HmUStQAp7fSR1K26ylRL+xhUButwFrER6JeWKWE/8xcBYi6pPFjAM+62ihMX0XnYBkVZ0KxnWOHmnwBQgVI+pADgkApXKZgn2CErrYBhJZSONzBIqoOMk1BuiH+1Q2EYCLFrrYArDB+5scb/S6pBkZlYV8SYZC8hoRLkPaLGV1aAiJML8jNNwGmWuAuMtwiOpIugOGPewPnguS1hEHD7BZM+xsmlSqPTPzEBaNAVPtc2q2mTEu40CusreTA3P4rUsNt4T4iljuDS5rRlizLVfrAWWsus1tj9hqXnYwR8sKl4ujQhd/wtSL6h9LCLAfN9SP4NPq+VwA+3Vm9RfoIvGL0/op84vRKc7E6QUWMPnJBUCdMe3UMQZ2A7nFugtx+uqC5xuz4URXdfG8enxhuRFEFTu+XdDmMopIK+nT9I8LaLee2Q3OFpRYNqd/Ca7AP7u2UfyQsM6UjJ0+IuFLiorkUXItLEWqtNcAyFQ5wsGum/gNJqUWqB59OSMogDY5hnVj1QkFBk090XZkkyAsKzmO50HFjQTGTPxhXWpC7ETxwGL7wl2PnZShQpT9oSsGvQlqy7YtVfo1ifz9yR3s/jq55VYm+gQG2mohEdqDaczGupuAXTvPy1tVMzK193aeE8F+MkzGPJFXCoxk7Q3foN2OJ8m/M1MjirAyzPqdxoruyVzPWXYXqUVsxodbEXYp6L7QXn2vDOBZVU6ziEJt/AAF+m38PyA256rYkzX43mt4z/rvFD6P4XG2A3s/P/TcsJc4sOp+Eszudo73RRfRbkQTRa14sjpfL5bgo8tcoMNx0sVgsFovFYrFYLBaLxWKxWExj7Lh+HJZ/CPjoUjyVfxUYxr7rPJ0v/xEvyV7zujeaRb7MEgP/7bCOsZ+d27zNHPLIf6KvmYSCQNEGFOEzvM+4Wb9/I80jo3fsLKz6482mTEL1NfQbkUbd9qaIIjIiNphhLQ/B68ZkbZLk8aYY/+UMuV9NOZKtnrPbcTZBuL7gnT4RB91BirIAZkQuOsPZg7YhJd046AokIt6fjxQ6EvRGzZX7apFPoywoA4RT55eTlmHCQRZN80VNoPADc9URG+myflAfHG7XIKkKlkmT9fTWbK8vlQbdxKfaAa1u15em+mzkT2/1n/OkTuR4taFOu2HSNlDGSYa153quyASoyjsouQVdw4CcoO5TqshRGFUHyOZBv+OSrqtvXxNyiVP5AXcoVwK3+pJCG4XqVC3wFu9atxf9FfY3OWEsnC8/JZshrjBPQ/l15U5mj8t36CLGX9dxLM9sIBI4b7L+NhnRZTWWfkeKKgSe7BZxp1TEMfzj3J9dg64aE0lP5Bkg0sRG5MMoTGb+YEtvZXgyuYq6dyQZWxs1ToZEchwRE6EFlSE+NyheDzVIkqnQKkqIhWihMkVpJDZzkOphiu0Y1ank4s+IUuJbaGmf1EfaJ0LFgfH3IaLFO+vwR49FflmUrcQLUl2Z5LzZiJRQC6eozxENy6igZQwzdsVBZxpWeiCZIPMVc71PQuOcZIIPU9RftmlJMsGfjWpCxZiQZIJ/2jUjUzcjmeDnFE0pahQT1V0YmpNLHhhVfshisVgsFovFYrFY/gX+A6hlYJmYm+m3AAAAAElFTkSuQmCC"}></img>
                </div>
                <div>
                    {u.followed ? <button className="" onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> 
                    : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span> 
            </span>
            </div>)
        }
    </div>
    }

}
export default FriendsC;

//  <img src={u.photos.small != null ? u.photos.small : u.photos.small = "data:image/png;base64,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"}  />