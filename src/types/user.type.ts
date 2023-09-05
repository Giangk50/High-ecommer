export interface User {
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  }
  address?: {
    city: string
    street: string
    number: number
    zipcode: string
    geolocation: {
      lat: string
      long: string
    }
  }
  phone: string
}

export interface CartInterface {
  id?: number
  userId: number
  date: string
  products: CartProduct[]
  __v?: number
}

export interface CartInterfaceForPost extends Omit<CartInterface, 'products'> {
  products: Omit<CartProduct, 'title' | 'price'>[]
}

export interface CartProduct {
  productId: number
  quantity: number
  title: string
  price: number
}
