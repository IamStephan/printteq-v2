export interface InstaData {
  id: string
  caption: string
  media_url: string
  timestamp: string
}

export interface InstaImageData extends InstaData {
  media_type: "VIDEO"
  thumbnail_url: string
}

export interface InstaVideoData extends InstaData {
  media_type: "IMAGE"
}

export interface InstaResponse {
  data: Array<InstaImageData | InstaVideoData>
  paging: {
    cursors: {
      before: string
      after: string
    }
    next?: string
    previous?: string
  }
}

export interface InstaParams {
  fields: string
  limit: number
  access_token: string
  after?: string
}
