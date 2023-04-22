import axios from 'axios';

export class AppService {
    public async getAllBooks(): Promise<any>{
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms');
        return response.data;
    }
}