import { MessageActionTypes, MessageAction } from '../actions/message.actions';
import { Message } from '../actions/message.model';


export interface IMessageState {
  messages: Message[];
}

export const initialMessageState: IMessageState = {
  messages: []
};

export function messageReducer(state = initialMessageState, action: MessageAction): IMessageState 
{
  switch (action.type) 
  {
    case MessageActionTypes.AddMessage:
    {
      return { messages: [...state.messages.slice(0, state.messages.length), action.payload]};
    }
    case MessageActionTypes.DeleteMessage:
    {
      let newArr = state.messages.filter(item=>item.index != action.payload.index);
      return { messages: newArr};
    }
    case MessageActionTypes.LoadedMessages:
    {
      return { messages: action.payload };
    }
    default:
      return state;
  }
}
