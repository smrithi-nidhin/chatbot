import React, { useState } from 'react';
import Chat from './Chat';
class ListAll extends React.Component {

    state = {
      
        chats: [],
       
    }

    componentDidMount() {
        Chat.getAllChats()
            .then(data => {
                this.setState({
                    chats: data.data.chats
                });
            });
    }
    render() {
        return (
            <div className="container">
                <div className="coloumn">
                    <h1>Chat List</h1>
                </div>
                <div className="row" >
                    <table>
                        <tr>
                            <th>Response Id</th>
                            <th>User intent</th>
                            <th>User</th>
                            <th>Bot</th>
                            <th>Date</th>
                        </tr>
                    {
                        this.state.chats.map(chat =><tr>
                           
                           <td> {chat.response_id}</td>  
                           <td> {chat.user_intent}</td>  
                           <td> {chat.user}</td>  
                           <td> {chat.Bot}</td>  
                           <td> {chat.Date}</td>  

                          </tr>
                        )}
                        </table>
                </div>
                <br></br>
            </div>
        );
    }
}



export default ListAll;
