import React from 'react';
import useStore from '../store';
import { Card, CardContent, Typography, Button } from '@mui/material';

import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const PagesList = () => {
  const pages = useStore((state) => state.pages);
  const removePage = useStore((state) => state.removePage);
  const setEditingPage = useStore((state) => state.setEditingPage);
  const reorderPages = useStore((state) => state.reorderPages);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.index !== destination.index) {
      reorderPages(source.index, destination.index);
    }
  };

  return (
    <div className='w-full bg-white rounded-md p-4'>
      <Typography className='text-black' variant='h5' sx={{ mt: 0, mb: 1 }}>
        Strony w gazetce:
      </Typography>
      {pages.length === 0 && (
        <Typography className='text-black'>Brak dodanych stron.</Typography>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='pages'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {pages.map((page, index) => (
                <Draggable key={index} draggableId={`page-${index}`} index={index}>
                  {(provided) => (
                    <Card
                      sx={{ mb: 2 }}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CardContent>
                        <Typography variant='h6'>{page.title}</Typography>
                        <Typography variant='body2'>{page.description}</Typography>
                        <Typography variant='caption'>
                          Strona: {page.pageNumber}
                        </Typography>
                        {page.image && (
                          <img
                            src={page.image}
                            alt='Podgląd'
                            style={{ width: '100%', marginTop: 10 }}
                          />
                        )}
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={() => setEditingPage(index)}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Edytuj
                        </Button>
                        <Button
                          variant='outlined'
                          color='error'
                          onClick={() => removePage(index)}
                          sx={{ mt: 1 }}
                        >
                          Usuń
                        </Button>
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
