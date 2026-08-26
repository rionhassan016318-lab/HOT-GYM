import gymNewLook2026 from './images/hot_gym_fb_new_look_2026.jpg';
import gymBarbellStrengthZone from './images/gym_barbell_strength_zone_1787728514641.jpg';
import gymCarpetFloorView from './images/gym_carpet_floor_view_1787728533694.jpg';
import gymOfficeEntranceHall from './images/gym_office_entrance_hall_1787728554404.jpg';
import gymLegPressAngle from './images/gym_leg_press_angle_1787728574866.jpg';
import gymCardioSpin from './images/gym_cardio_spin_1787727463945.jpg';
import gymCableStation from './images/gym_cable_station_1787727546938.jpg';

// Newly added Facebook Official Gym Photos
import fbPostPhoto1 from './images/fb_post_1068400409263576.jpg';
import fbPostPhoto2 from './images/fb_post_1061317356638548.jpg';
import fbPostPhoto3 from './images/fb_post_938427715594180.jpg';
import fbPostPhoto4 from './images/fb_post_830597293043890.jpg';
import fbPostPhoto5 from './images/fb_post_820511480719138.jpg';
import fbPostPhoto6 from './images/fb_post_820511187385834.jpg';

export {
  gymNewLook2026,
  gymBarbellStrengthZone,
  gymCarpetFloorView,
  gymOfficeEntranceHall,
  gymLegPressAngle,
  gymCardioSpin,
  gymCableStation,
  fbPostPhoto1,
  fbPostPhoto2,
  fbPostPhoto3,
  fbPostPhoto4,
  fbPostPhoto5,
  fbPostPhoto6,
};

export const gymInteriorFloor = gymNewLook2026;
export const gymMainHallOffice = gymOfficeEntranceHall;
export const gymCardioBikes = gymCardioSpin;
export const gymDumbbellsFloor = gymBarbellStrengthZone;
export const gymDumbbellsAisle = gymBarbellStrengthZone;
export const gymHeavyStrength = gymLegPressAngle;
export const gymHeavyMachines = gymLegPressAngle;
export const gymFloorPerspective = gymCarpetFloorView;

export interface GymPhoto {
  id: string;
  title: string;
  category: string;
  caption: string;
  src: string;
  tag: string;
  facebookPostUrl?: string;
}

export const GYM_PHOTOS: GymPhoto[] = [
  {
    id: 'hot-gym-fb-ladies-fitness',
    title: 'লেডিস স্পেশাল ফিটনেস ও ট্রেনিং গাইডলাইন',
    category: 'লেডিস ফিটনেস',
    caption: 'HOT GYM Ladies Fitness: শুধু ওজন কমানো নয়—ফিট, স্ট্রং ও কনফিডেন্ট বডি গড়ে তোলার প্রফেশনাল দিকনির্দেশনা।',
    src: fbPostPhoto2,
    tag: 'লেডিস ফিটনেস',
    facebookPostUrl: 'https://www.facebook.com/share/p/1JfKxkyFLR/?mibextid=wwXIfr'
  },
  {
    id: 'hot-gym-fb-motivation',
    title: 'ফিটনেস মোটিভেশন ও পরিশ্রমের অঙ্গীকার',
    category: 'মোটিভেশন',
    caption: 'পরিশ্রমই সাফল্যের মূল চাবিকাঠি — নিজের উপর বিশ্বাস রেখে লক্ষ্য অর্জন করুন হট জিমের সাথে।',
    src: fbPostPhoto4,
    tag: 'মোটিভেশন',
    facebookPostUrl: 'https://www.facebook.com/share/p/1HXWDahnno/?mibextid=wwXIfr'
  },
  {
    id: 'hot-gym-fb-official-notice',
    title: 'হট জিম অফিসিয়াল আপডেট ও নোটিশ',
    category: 'নোটিশ ও আপডেট',
    caption: 'হট জিম মেম্বারদের জন্য অফিসিয়াল শিফট আপডেট ও বিশেষ নোটিশ বোর্ড।',
    src: fbPostPhoto1,
    tag: 'অফিসিয়াল নোটিশ',
    facebookPostUrl: 'https://www.facebook.com/share/p/1NfRrfk6xB/?mibextid=wwXIfr'
  },
  {
    id: 'hot-gym-fb-floor-reopen',
    title: 'হট জিম সেন্ট্রাল ওয়ার্কআউট অ্যারিনা',
    category: 'জিম ফ্লোর',
    caption: 'সুরেশ প্লাজার ৪র্থ তলায় প্রিমিয়াম এসি ফিটনেস পরিবেশ ও আন্তর্জাতিক মানের জিম ইন্সট্রুমেন্ট।',
    src: fbPostPhoto3,
    tag: 'ফিটনেস অ্যারিনা',
    facebookPostUrl: 'https://www.facebook.com/share/p/17v6ifDX5X/?mibextid=wwXIfr'
  },
  {
    id: 'hot-gym-fb-820511480719138',
    title: 'হট জিম এক্সক্লুসিভ জিম ফ্লোর ভিউ',
    category: 'জিম ফ্লোর',
    caption: 'নিয়মিত ক্লিন ও হাইজেনিক পরিবেশ, সেন্ট্রাল এয়ার কন্ডিশনিং এবং নিরবচ্ছিন্ন হাই-স্পিড ওয়াই-ফাই।',
    src: fbPostPhoto5,
    tag: 'ফ্লোর ভিউ',
    facebookPostUrl: 'https://www.facebook.com/share/1EutWjg8YJ/'
  },
  {
    id: 'hot-gym-fb-820511187385834',
    title: 'সুরেশ প্লাজা ৪র্থ তলা জিম স্পেস',
    category: 'জিম ফ্লোর',
    caption: '১৪৪ সুরেশ প্লাজা, নারায়ণগঞ্জ ক্লাবের পশ্চিম পাশে ও পলি ক্লিনিক সংলগ্ন সুবিশাল জিম স্পেস।',
    src: fbPostPhoto6,
    tag: 'সুরেশ প্লাজা ফ্লোর',
    facebookPostUrl: 'https://www.facebook.com/share/18YqooShEN/'
  }
];


