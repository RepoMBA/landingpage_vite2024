import React from "react";
import NewHeader from "../../components/Header/NewHeader";
import Footer from "../../components/Footer/index";
import videosData from './videos.json';
import { Video } from './types';

const VideosContent: React.FC = () => {
  const videos: Video[] = videosData;

  return (
    <div>
      <NewHeader />
      <div className="mt-16 px-4 lg:px-24"> {/* Adjusted top margin and horizontal padding */}
        <div className="bg-[#cecade] rounded-lg p-6 md:p-8"> {/* Adjusted padding */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="text-black w-full bg-[#eed4d4] rounded-4xl p-4 mb-4">
              <a href="https://www.youtube.com/@legittcontracts" target="_blank" rel="noopener noreferrer">
                <div>
                  <h1 className="text-2xl md:text-3xl mb-4">Have a look at</h1>
                  <div className="video-responsive mb-4">
                    <img src="src/assets/images/videoThumbnail5.png" alt="Legitt AI Official Channel" className="rounded w-full" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold">Legitt AI Official Channel</h1>
                </div>
              </a>
            </div>

            {videos.map((video) => (
              <div key={video._id.$oid} className="text-black w-full bg-[#e0e8f0] rounded-lg p-4 mb-4">
                <div>
                  <div className="video-responsive mb-4">
                    <iframe
                      width="100%"
                      height="270"
                      src={`https://www.youtube.com/embed/${video.video_id}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                      className="rounded"
                    />
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">{video.title}</h2>
                  <p className="text-gray-700">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VideosContent;
