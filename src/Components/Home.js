import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const history = useHistory();

    function createData(name, cal, fat, carb, prot) {
        return { name, cal, fat, carb };
    }

    const rows = [
        createData('proton', 159, 'pro@g.com', 1234567890),
        createData('electron', 237, 'elec@g.com', 3216549870),
        createData('nuetron', 262, 'nue@g.com', 1254789630),
        createData('atom', 305, 'atom@g.com', 3214567700),
        createData('molecule', 356, 'mol@g.com', 9966332245),
    ];

    return (
        <div className="containerH">
            <div className="pos">
                <button onClick={() => { history.replace({ pathname: '/signup' }); localStorage.removeItem('login'); }} className="btn">Log Out</button>
            </div>
            <div style={{ overflow: 'auto' }} className=" card-contentsH cardH">
                <table style={{ border: '0px', marginTop: '20px' }} className="dish">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((item, key) =>
                            <tr key={key}>
                                <td>{item.name}</td>
                                <td>{item.cal}</td>
                                <td>{item.fat}</td>
                                <td>{item.carb}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;