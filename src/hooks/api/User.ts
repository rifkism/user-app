interface Name {
  title: string
  first: string
  last: string
}

interface Location {
  street: {
    number: number
    name: string
  }
  city: string
  state: string
  country: string
  postcode: number
  coordinates: {
    latitude: string
    longitude: string
  }
  timezone: {
    offset: string
    description: string
  }
}

interface Login {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

interface DateAge {
  date: string
  age: number
}

interface Id {
  name: string
  value: string
}

interface Picture {
  large: string
  medium: string
  thumbnail: string
}

export interface User {
  cell: string
  email: string
  gender: string
  name: Name
  location: Location
  login: Login
  dob: DateAge
  registered: DateAge
  phone: string
  id: Id
  picture: Picture
  nat: string
}
