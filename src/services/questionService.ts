import httpClient from 'httpClient';
import endPoints from 'constants/endPoints';
import { contactFields } from 'types/contactTypes';

class questionService {
  static sendQuestion(data: contactFields) {
    return httpClient.post(endPoints.question.SEND_QUESTION, data);
  }
}
export default questionService;
