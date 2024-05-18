import { Button } from '../../shared/ui/Button';
import { Dashboard } from '../../shared/ui/Dashboard';
import { GetStarted } from '../../shared/ui/Dashboard/Home/GetStarted';
import { Quote } from '../../shared/ui/Dashboard/Home/Quote';
import { Form } from '../../shared/ui/Form';
import { Input } from '../../shared/ui/Input';

export const Home = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Dashboard>
        <Form className="mb-[20px] " label="Filters:" submit={onSubmit}>
          <Input
            name="title"
            title="Book title:"
            variant="primary"
            placeholder="Enter the text"
          />
          <Input
            name="author"
            title="The author:"
            variant="primary"
            placeholder="Enter the text"
          />
          <Button className="mr-auto mt-[12px]" type="submit">
            To apply
          </Button>
        </Form>
        <GetStarted />
        <Quote />
      </Dashboard>
    </div>
  );
};
