import React from "react";

export default class List extends React.Component{

    state ={
        users: ['Edi', 'Vincent','wiawwaug']
    }

    render () {
        return(
            <div>
                <ul>
                    {/* {this.state.users.map((user,i) => <li key={i}>{user}</li>)} */}
                    {this.state.users.map(function(user, i){
                        return <li key={i}>{user}</li>
                    })}

                </ul>
               
            </div>

        )
    }
}