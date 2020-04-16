import { useRouter } from 'next/router';
import Lesson from '../../components/lesson/lessonPage'

export default function LessonById() {
    const router = useRouter();
    console.log("from router...");
    console.log(router.query.id);
    return (
    <Lesson lessonId={router.query.id} />
    );
}