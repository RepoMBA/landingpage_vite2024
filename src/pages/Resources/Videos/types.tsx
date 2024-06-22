export interface Video {
    _id: {
      $oid: string;
    };
    video_id: string;
    title: string;
    desc: string;
    category: string;
  }  