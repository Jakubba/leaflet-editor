import useStore from '../store';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';
import {
  themeStyles,
  titleStyles,
  descriptionStyles,
  numberPageStyles,
  clipPaths,
} from '../utils/themeStyles';
const PagesList = () => {
  const pages = useStore((state) => state.pages);
  const removePage = useStore((state) => state.removePage);
  const setEditingPage = useStore((state) => state.setEditingPage);
  const reorderPages = useStore((state) => state.reorderPages);
  const theme = useStore((state) => state.theme);
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.index !== destination.index) {
      reorderPages(source.index, destination.index);
    }
  };

  return (
    <div className='w-full bg-white rounded-md p-4'>
      <Typography className='text-black' variant='h5' sx={{ mt: 0, mb: 1 }}>
        Pages List
      </Typography>
      {pages.length === 0 && <Typography className='text-black'>Empty list</Typography>}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='pages'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {pages.map((page, index) => (
                <Draggable key={index} draggableId={`page-${index}`} index={index}>
                  {(provided) => (
                    <Card
                      sx={{ mb: 2, ...themeStyles[theme] }}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CardContent>
                        <Typography variant='h6' sx={titleStyles[theme]}>
                          {page.title}
                        </Typography>
                        <Typography variant='body2' sx={descriptionStyles[theme]}>
                          {page.description}
                        </Typography>
                        {page.image && (
                          <img
                            src={page.image}
                            alt='Podgląd'
                            style={{
                              width: '100%',
                              marginTop: 10,
                              clipPath: clipPaths[theme] || 'none',
                              objectFit: 'cover',
                            }}
                          />
                        )}
                        <Typography variant='caption' sx={numberPageStyles[theme]}>
                          {page.pageNumber}
                        </Typography>
                        <div>
                          <Button
                            variant='contained'
                            color='primary'
                            onClick={() => setEditingPage(index)}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant='outlined'
                            color='error'
                            onClick={() => removePage(index)}
                            sx={{ mt: 1 }}
                          >
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default PagesList;
