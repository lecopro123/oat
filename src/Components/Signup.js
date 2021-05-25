import React, { useState, useRef, useEffect } from 'react';
import './Signup.css';
import { Alert } from '@material-ui/lab/';
import { fetchdata } from '../API';
import { useHistory } from 'react-router-dom';


const Signin = () => {
    const ref = useRef();
    const history = useHistory();
    const [err, seterr] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    const [Loading, setLoading] = useState(false)
    const rex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    useEffect(() => {
        ref.current = true
        return () => (ref.current = false)
    }, [])

    async function Submit(e) {
        e.preventDefault()

        var em = rex.test(email)
        var pass = password.length > 5

        function cb() {
            console.log(ref.current)
            if (!ref.current) return
            else setLoading(false)
        }

        if (rex.test(email) && password.length > 5) {
            try {
                seterr("")
                setLoading(true)
                const data = await fetchdata(cb, email, password)
                if (data.status === 200 && data.result.success) {
                    localStorage.setItem('login', JSON.stringify(data))
                    history.push({ pathname: '/' })
                }
                else {
                    seterr("Invalid password/email")
                }
                //history.push("/")
            } catch {
                seterr("Failed to Login")
            }
        }
        else {
            //console.log(em)
            if (!em) return seterr(`Please enter a valid email`)
            if (!pass) return seterr(`Passwords must contain atleast 6 characters`)
        }

        setLoading(false)
    }

    console.log(ref)
    //console.log(password);
    //console.log(confirm)
    //console.log(format.test('hb'));
    return (
        <div className="container">
            <div className="card">
                {Loading ?
                    <div className="card-contents">
                        <div style={{ margin: '35px' }} className="loader"></div>
                    </div>
                    :
                    <div style={{ padding: '20px' }}>
                        {err !== '' ? <div style={{ paddingBottom: '10px' }}><Alert severity="error">{err}</Alert></div> : null}
                        <form>
                            <div className="card-contents">
                                <input
                                    autoComplete="on"
                                    value={email}
                                    className="standard"
                                    type="text"
                                    placeholder="Email"
                                    onChange={(e) => {
                                        setemail(e.target.value)
                                    }
                                    } />
                            </div>
                            <div className="card-contents">
                                <input
                                    autoComplete="on"
                                    value={password}
                                    className="standard"
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => {
                                        setpassword(e.target.value)
                                    }
                                    } />
                            </div>
                        </form>
                    </div>}
                <div className="footer">
                    <button disabled={Loading} onClick={Submit} className="btn">Login</button>
                </div>
                <div className="Ulogo">
                    <div className="header">
                        <div className="card-header"><h3 className="card-style-design" >BRAND</h3><h5 className="card-style-design" >Brand Tag</h5></div>
                        <div className="card-header"><h3 className="card-style-design" >Brand</h3><h5 className="card-style-design" >.com</h5></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Signin;