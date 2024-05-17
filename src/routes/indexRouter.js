import { Router } from "express"

const router = Router()

router.get('/', async (req, res) => {
    try {
        res.render('index',{
            style:'style.css'
        })
    } catch (error) {
        console.log(error)
    }
})

export default router