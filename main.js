import './scss/main.scss'
import profile_1 from "./assets/profile-(1).jpg"
import profile_2 from './assets/profile-(2).jpg';
import profile_3 from './assets/profile-(3).jpg';
import profile_4 from './assets/profile-(4).jpg';
import profile_5 from './assets/profile-(5).jpg';
import profile_6 from './assets/profile-(6).jpg';
import profile_7 from './assets/profile-(7).jpg';
import profile_8 from './assets/profile-(8).jpg';
import profile_9 from './assets/profile-(9).jpg';
import profile_10 from './assets/profile-(10).jpg';

// Fake Data
const COMMENT_TYPE ={
  REACTED: "reacted to your recent post",
  FOLLOW: "followed you",
  PRIVATE: "sent you a private message",
  COMMENTED: "commented on your post"
}
const data = {
	users: [
		{
			name: 'Liam Smith',
			profilePicture: profile_1,
			commentType: COMMENT_TYPE.REACTED,
			isRead: true,
			reference: "Ways I've learned to cook sustainably.",
			message: null,
		},
		{
			name: 'Olivia Johnson',
			profilePicture: profile_2,
			commentType: COMMENT_TYPE.FOLLOW,
			isRead: false,
			reference: null,
			message: null,
		},
		{
			name: 'Noah Williams',
			profilePicture: profile_3,
			commentType: COMMENT_TYPE.PRIVATE,
			isRead: false,
			reference: null,
			message:
				'Hey, have you heard about the new restaurant that opened downtown?',
		},
		{
			name: 'Emma Brown',
			profilePicture: profile_4,
			commentType: COMMENT_TYPE.REACTED,
			isRead: true,
			reference: 'How you can have your cake and eat it too.',
			message: null,
		},
		{
			name: 'Lucas Jones',
			profilePicture: profile_5,
			commentType: COMMENT_TYPE.COMMENTED,
			isRead: true,
			reference: null,
			message: null,
		},
		{
			name: 'Ava Davis',
			profilePicture: profile_6,
			commentType: COMMENT_TYPE.FOLLOW,
			isRead: false,
			reference: null,
			message: null,
		},
		{
			name: 'Mason Wilson',
			profilePicture: profile_7,
			commentType: COMMENT_TYPE.PRIVATE,
			isRead: false,
			reference: null,
			message:
				'Those designs look great! Sending you the updated client request now.',
		},
		{
			name: 'Isabella Taylor',
			profilePicture: profile_8,
			commentType: COMMENT_TYPE.FOLLOW,
			isRead: true,
			reference: null,
			message: null,
		},
		{
			name: 'Elijah Anderson',
			profilePicture: profile_9,
			commentType: COMMENT_TYPE.REACTED,
			isRead: false,
			reference: "Ways I've learned to cook sustainably.",
			message: null,
		},
		{
			name: 'Charlotte Martinez',
			profilePicture: profile_10,
			commentType: COMMENT_TYPE.COMMENTED,
			isRead: true,
			reference: null,
			message: null,
		},
	],
};

const notificationContainerEl = document.getElementById('notification-container');
const notificationCount = document.getElementById('notification-count');

notificationCount.textContent = data.users.filter(user => user.isRead == false).length

data.users.forEach((user) => {
  const notification = document.createElement("div")

  notification.classList.add("notification")

  if (user.isRead == false){
    notification.classList.add("unread")
  }

  notification.innerHTML = `
  <img src=${user.profilePicture}>  
  <p>
  <span class="name">${user.name}</span> 
  ${user.commentType} 
  ${user.reference ? `<span class="reference">${user.reference}</span>` : ''}
  </p>
  `;


    if (user.message) {
			notification.innerHTML += `
      <div><p class="private">${user.message}</p></div>
    
    `;
		}

  notificationContainerEl.appendChild(notification)
})

