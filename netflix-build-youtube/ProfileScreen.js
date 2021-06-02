.profileScreen{
    height: 100vh;
    color:white;

}

.profileScreen__body{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 8%;
    max-width: 800px;
}

.profileScreen__info{
    display: flex;
}

.profileScreen__info> h1 {
    font-size: 60px;
    font-weight: 400;
    border-bottom: 1px solid #282c2d;
    margin-bottom: 20px;
}

.profileScreen__details{
    color: white;
    margin-left: 25px;
    flex: 1;
}

.profileScreen__details > h2 {
    background-color: gray;
    padding: 15px;
    font-size: 15px;
    padding-left: 20px;
}

.profileScreen__signOut{
    padding: 10px 20px;
    font-size: 1rem;
    margin-top: 5%;
    width: 100%;
    color: white;
    background-color: #e50914;
    font-weight: 600;
    border: none;
    cursor: pointer;
}

.profileScreen__plans > h3 {
    border-bottom: 1px solid #282c2d;
    padding-bottom: 10px;
}


.profileScreen__info > img {
    height: 100px;
}