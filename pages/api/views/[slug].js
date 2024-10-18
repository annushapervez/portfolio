// Import only what you need from Firebase
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, updateDoc, setDoc, increment } from 'firebase/firestore'

const views = async (req, res) => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_REACT_APP_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  }

  // Initialize Firebase app
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  // Get the slug from the request query
  const slug = req.query.slug

  try {
    // Get the document reference
    const viewsRef = doc(db, 'views', slug)
    const docSnap = await getDoc(viewsRef)

    if (docSnap.exists()) {
      // If the document exists, increment the view count
      await updateDoc(viewsRef, { count: increment(1) })
      const updatedSnap = await getDoc(viewsRef)
      res.json({ views: updatedSnap.data().count })
    } else {
      // Create a new document if it doesn't exist
      await setDoc(viewsRef, { count: 1 })
      res.json({ views: 1 })
    }
  } catch (error) {
    console.error('Error fetching or updating views:', error)
    res.status(500).json({ error: "Failed to fetch or update views" })
  }
}

export default views
