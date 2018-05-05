import React from 'react';


class Admin extends React.Component {
    render() {
        const divStyle = {
            fontFamily : 'Roboto Mono'
          }
        return (
            <div>
                <h3 style={divStyle}>Admin Page</h3>
                    <p>this is the admin paga, yo!</p>
                <Link to= '/'>Go to Homepage</Link>
            </div>    
        );
    }


}

export default Admin; 