import React from "react";

export default class Conditional extends React.Component{

    state ={
        isLoading: true
    }

    render(){
        //test bikin loading
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000)

        return(
            <div>
                {this.state.isLoading? <h1>plz weit...</h1> : <h1>tjakep</h1>}


            </div>
        )

        // ini buat test login sukses atau gagal
        // const isLogin = false;
        // let message = ' ';
        // if(isLogin){
        //     message ='dah login ini';
        // }
        // else{
        //     message = 'login dulu atuh';
        // }
        // return(
        //     <div>
        //         {isLogin? <h1>dah login ini</h1> : <h1>gagal kelez</h1>}
        //     </div>
        // )


        
        
    }

}