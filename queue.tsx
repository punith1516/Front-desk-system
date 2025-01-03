import QueueList from '../../../components/Queue/QueueList';

export default function QueuePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Queue Management</h1>
      <QueueList />
    </div>
  );
}
