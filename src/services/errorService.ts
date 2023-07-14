import axios from 'axios';

const jiraAxios = axios.create({
    baseURL: 'https://amitkskumar.atlassian.net/rest/api/3/',
    headers: {
        'content-type': 'application/json',
    },
    auth: {
        username: 'amitks.kumar@gmail.com',
        password: 'ATATT3xFfGF0bGmNrHCy1xGNhC1PW5-HM4jddfjT4mXs5wWOUY5OQ0s-bLwjQ7W7P4HXnx-KGYeyYEW8s4mwJR4iIN4mJnIQP15_AjaPU2V5-Za0zRbcUtvaegqGxhYyNo8Irdn53VL_03Tu9uniIJbET_GzdHE0LXjOFGNligQx7VlDaLsiKxE=3DD9FC3C'
    }
})

export const createJira = async () => jiraAxios.post('/issue',
    {
        "fields": {
            "summary": "Null Pointer Exception",
            "issuetype": {
                "id": "10004"
            },
            "labels": [
                "PROD_BUG"
            ],
            "project": {
                "key": "DBHAC"
            },
            "assignee": {
                "accountId": "70121:ee4b6c0d-a727-43a8-a977-9b8252fdbc2c"
            },
            "description": {
                "type": "doc",
                "version": 1,
                "content": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "text": "Null Pointer Exception",
                                "type": "text"
                            }
                        ]
                    }
                ]
            }
        }
    })