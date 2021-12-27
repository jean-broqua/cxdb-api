import { model, Schema } from 'mongoose'

console.log(process.env.DB_URI)

interface Restaurant {
  placeName: string
  xis: string
  price: number
  review: string
  stars: number
}

const schema = new Schema<Restaurant>({
  placeName: { type: String, required: true },
  xis: { type: String, required: true },
  price: { type: Number, required: true },
  review: { type: String, required: true },
  stars: { type: Number, min: 0, max: 5, required: true }
})

const Restaurant = model<Restaurant>('Restaurant', schema)

export default Restaurant
