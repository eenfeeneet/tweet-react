var monkey = "hello";

var getDate = function(tDate){
    var dArr = tDate.split(" ")
    dArr.forEach(item =>{
        console.log(item)
    })
    var month;
    switch (dArr[1]) {
      case "Jan":
        month = "01";
      break;
      case "Feb":
      month = "02";
      break;
      case "Mar":
      month = "03";
      break;
      case "Apr":
      month = "04";
      break;
      case "May":
      month = "05";
      break;
      case "Jun":
      month = "06";
      break;
      case "Jul":
      month = "07";
      break;
      case "Aug":
      month = "08";
      break;
      case "Sept":
      month = "09";
      break;
      case "Oct":
      month = "10";
      break;
      case "Nov":
      month = "11";
      break;
      case "Dec":
      month = "12";
      break;
    }
    const newDateS = dArr[5]+'-'+month+'-'+dArr[2]+'T'+dArr[3]

    console.log(newDateS)
    //const postDate =new Date(dArr[0]+dArr[1]+dArr[2]+dArr[5]+dArr[3]+'Z')
    const dateObj =new Date(newDateS+'Z')
    return dateObj
}


class Tweets extends React.Component {
    render() {
        console.log(this.props.data)
        let userTweets = this.props.data.map( (item, index) => {
            var tweets = item.text
            var rtCount = item.retweet_count
            var fvCount = item.favorite_count
            var name = item.user.name
            var screenName = item.user.screen_name
            var dpSrc = item.user.profile_image_url
            var verSrc = 'verified.jpg'
            var rtSrc = 'https://cdn0.iconfinder.com/data/icons/interface-editing-and-time-1/64/retweet-arrow-twitter-512.png'
            var likeSrc = 'https://cdn3.iconfinder.com/data/icons/simple-line-3/32/Favourite_favourites_heart_like_liked-512.png'
            var verified = item.user.verified

            var tDate = item.created_at

            var postDate = getDate(tDate)

            const refreshTime = new Date();


            if (postDate < refreshTime) {
                refreshTime.setDate(refreshTime.getDate() + 1);
            }
            var diff = refreshTime - postDate;
            var msec = diff;
            var hh = Math.floor(msec / 1000 / 60 / 60);
            msec -= hh * 1000 * 60 * 60;
            var mm = Math.floor(msec / 1000 / 60);
            msec -= mm * 1000 * 60;
            var ss = Math.floor(msec / 1000);
            msec -= ss * 1000;
            console.log(hh, mm, ss)


            return (
                <div className="card my-2">
                    <div className="card-body">
                        <div className="row">
                            {/* profile image */}
                            <div className="col-lg-3 mx-2">
                                <img src={dpSrc} width="100" className='rounded-circle'/>
                            </div>

                            <div className="col-lg">
                                {/* name row */}
                                <div className="row justify-content-start align-items-end">
                                    <div className="d-flex align-items-start">
                                        <h5>{name}</h5>
                                        <img src={verSrc} width="35" height="23" />
                                    </div>

                                    <div className="d-flex ml-2 align-items-end text-muted">
                                        <h5><a href="#">@{screenName}</a></h5>
                                        <h6>&nbsp;</h6>
                                        <h6>{hh}h</h6>
                                    </div>
                                </div>
                                {/* tweet row */}
                                <div className="row">
                                    <p className="">{tweets}</p>
                                </div>

                                <div className="row">

                                    <img src={rtSrc} width="22" height="22"/>
                                    <p className="ml-3">{rtCount}</p>
                                    <img src={likeSrc} width="22" height="22"/>
                                    <p className="ml-3">{fvCount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
        });

        return (
            <div className='col mx-auto'>
            {userTweets}
            </div>
        );
    }
}


class FeedsPage extends React.Component {

    render() {
        console.log(this.props.data)
        var data = this.props.data
        var name = this.props.data[0].user.name
        var verSrc = 'verified.jpg'


        return (
            <div className="card col-8 my-2 mx-auto p-0">
                <div className="card-header d-flex align-items-center">
                    <h2 className="m-0">{name}</h2>
                    <img src={verSrc} width="42" height="30" />
                </div>
                <div className="card-body p-0">
                    <div className="card-title">
                    <ul class="nav nav-tabs nav-justified my-2">
                        <li class="nav-item">
                            <h6><a href="#" className="nav-link active">Tweets</a></h6>
                        </li>
                        <li class="nav-item">
                            <h6><a href="#" className="nav-link ">Tweets & replies</a></h6>
                        </li>
                        <li class="nav-item">
                            <h6><a href="#" className="nav-link ">Media</a></h6>
                        </li>
                        <li class="nav-item">
                            <h6><a href="#" className="nav-link ">Likes</a></h6>
                        </li>
                    </ul>
                    </div>
                    <Tweets data = {data}/>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <FeedsPage data = {tweets}/>,
    document.getElementById('root')
    );



// class ProfileImage extends React.Component{
//     render(){
//         return(
//             <div className="col-lg-2 mx-2">
//                                 <img src={dpSrc} width="100" className='rounded-circle'/>
//                             </div>

//         );
//     }
// }