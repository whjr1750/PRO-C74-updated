import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
// 	apiKey: 'AIzaSyA8URZYNDZM816bx1US9DXMz1Ra0bzrH9o',
// 	authDomain: 'wilyapp-d4952.firebaseapp.com',
// 	projectId: 'wilyapp-d4952',
// 	storageBucket: 'wilyapp-d4952.appspot.com',
// 	messagingSenderId: '690423895839',
// 	appId: '1:690423895839:web:0fc9718379abab5c14822a',
// };
const firebaseConfig = {
	apiKey: "AIzaSyDSQ8yTGhD-FsW2aNKan6NXC3Iq3zIN-os",
	authDomain: "e-library-971f6.firebaseapp.com",
	projectId: "e-library-971f6",
	storageBucket: "e-library-971f6.appspot.com",
	messagingSenderId: "402056865819",
	appId: "1:402056865819:web:41ca11c7176fa7b11570be"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
