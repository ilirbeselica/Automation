import React, {useState} from 'react';
import axios from 'axios';

const Wordpress = () => {

    const [request, setRequest] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            method: 'post',
            url: 'http://localhost:8899/wordpress/create',
            data: request
        }
        console.log(request)
        axios(options).then(res => {
            if (res.data.message) {
                document.querySelector('.statusPost').style.color = "green"
            }
        })
    }
    
    return (

        <form className="wordpressForm">
            <h2 className="statusPost">Generate Wordpress Post</h2>
        <div class="form-group">
          <label for="keyword">Keyword:</label>
          <input type="text" class="form-control" id="keyword" placeholder="Enter keyword" onChange={(e) => setRequest({...request, [e.target.id]: e.target.value})
          }/>
        </div>
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" class="form-control" id="title"  placeholder="Enter title" onChange={(e) => setRequest({...request, [e.target.id]: e.target.value})
          }/>
        </div>
        <div class="form-group">
          <label for="intro">Intro</label>
          <input type="text" class="form-control" id="intro"  placeholder="Enter intro"onChange={(e) => setRequest({...request, [e.target.id]: e.target.value})
          }/>
        </div>
        <div class="form-group">
          <label for="h2">H2</label>
          <input type="text" class="form-control" id="h2"  placeholder="Enter h2"onChange={(e) => setRequest({...request, [e.target.id]: e.target.value})
          }/>
        </div>
        <div class="form-group">
          <label for="desc">Description</label>
          <input type="text" class="form-control" id="desc"  placeholder="Enter description"onChange={(e) => setRequest({...request, [e.target.id]: e.target.value})
          }/>
        </div>
        <div class="form-group">
          <label for="feature">Feature Image  </label>
          <input type="text" class="form-control" id="feature"  placeholder="Enter intro"onChange={(e) => setRequest({...request, [e.target.id]: e.target.value})
          }/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>

    )
}

export default Wordpress;