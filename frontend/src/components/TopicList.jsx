import React, {useEffect, useState} from 'react';

async function getTopicListFromApi(){
    const url = 'http://127.0.0.1:8000/api/topics/'
    try{
        const response = await fetch(url);
        const ReponseJson = await response.json();
        console.log(ReponseJson);
        return ReponseJson;
    } catch(error){
        console.log(error);
        return [];
    }

}

export default function TopicList(){
    const [topicList, setTopicList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        console.log("useEffect");
        async function getTopicList(){
            const topicListFromApi = await getTopicListFromApi();
            console.log("topic List",topicListFromApi);
            setTopicList(topicListFromApi);
            setIsLoading(false);
        }
        getTopicList().catch(console.error);
        
    },[topicList]);

    const topicCards=topicList?.map(item=>{
        return (
            <p>{item.name}</p>
        )
    })
    

    return isLoading ? (<h1>Loading</h1>) : (
        <div>
            {topicCards}
        </div>
    );
}