import { Article } from '@/types/article';
import { formatMeetingTime, formatRelativeTime } from '@/utils/date';
import { cn } from '@/utils/tailwind';
import Image from 'next/image';
import Map from './Map';

type Props = Omit<Article, 'author' | 'id'>;

const ArticleContent = ({
  title,
  description,
  meetingLocation,
  maxParticipants,
  currentParticipants,
  startTime,
  endTime,
  createdAt,
  status,
}: Props) => {
  return (
    <div className="p-4">
      <div className="text-lg flex gap-2 font-bold ">
        <span
          className={cn(status === '모집중' ? 'text-primary' : 'text-gray-600')}
        >
          {status}
        </span>
        <span className="text-gray-800 ">{title}</span>
      </div>
      <div className="text-md mt-2 text-gray-800 py-4">{description}</div>
      <div className="text-sm">
        <div className="mr-auto text-gray-500 py-3">
          {formatRelativeTime(createdAt)}
        </div>
        <div>
          <div className="text-gray-600 flex items-center">
            <Image
              src="/images/icon/participants_icon.png"
              alt="participants"
              width={12}
              height={12}
              className="mr-1"
            />
            {currentParticipants}/{maxParticipants}명 참여
          </div>
          <div className="text-gray-700 flex items-center">
            <Image
              src="/images/icon/clock_icon.png"
              alt="clock"
              width={12}
              height={12}
              className="mr-1"
            />
            {formatMeetingTime(startTime, endTime)}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <span className="text-gray-700 text-lg font-bold">위치</span>
        <div className="text-secondary flex items-center text-sm mt-2 mb-2">
          <Image
            src="/images/icon/map_icon.png"
            alt="map"
            width={12}
            height={12}
            className="mr-1"
          />
          {meetingLocation}
        </div>
        <Map />
      </div>
    </div>
  );
};

export default ArticleContent;
