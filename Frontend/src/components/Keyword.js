import React, { useState } from 'react';
import axios from 'axios';

const Keyword = () => {

    const [keyword, setKeyword] = useState('')
    const [limit, setLimit] = useState('20')
    const [list, setList] = useState('')

    const handleKeywordSubmit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8899/keyword/${keyword}/${limit}`).then(res => {
            const newData = res.data.map(item => item.replace(/\W+/g, " ")).join('\n')
            setList(newData)
            console.log(list)
        })
    }

    const handleClear = () => {
        setKeyword('');
        setList('')
    }

    return (
        
        <div className="container-keyword">
            
            <form className="keyword-form">
                <div className="inputs">
                    <div className="form-group">
                        <label htmlFor="keyword">Keyword:</label>
                        <input type="text" name="keyword" id="keyword" onChange={(e) => setKeyword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="keyword">Limit</label>
                        <input type="number" name="keyword" id="keyword" onChange={(e) => setLimit(e.target.value)} />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleKeywordSubmit}>Submit</button>
                <button type="reset" className="btn btn-secondary" onClick={() => handleClear()} >Clear</button>

                <textarea className="keyword-list" value={list}>
                    asd
                </textarea>
            </form>

        </div>
    )
}

export default Keyword;