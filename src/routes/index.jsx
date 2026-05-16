import { createFileRoute } from '@tanstack/react-router';
import Ubuntu from '../../components/ubuntu';

export const Route = createFileRoute('/')({
  ssr: false,
  component: Ubuntu,
});
