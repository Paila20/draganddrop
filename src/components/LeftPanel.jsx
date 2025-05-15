
import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItemButton,
  IconButton,
  Modal,
} from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import BallotSharpIcon from '@mui/icons-material/BallotSharp';
import {
  DragDropContext,
  Droppable,
  Draggable,
} from '@hello-pangea/dnd';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const LeftPanel = ({ onItemSelect, contentItems }) => {
  const [items, setItems] = useState(contentItems);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const itemRefs = useRef([]);

  useEffect(() => {
    setItems(contentItems);
  }, [contentItems]);

  useEffect(() => {
    if (itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [selectedIndex]);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    onItemSelect(items[index].title);
  };

  const scrollList = (direction) => {
  setItems((prevItems) => {
    const newItems = [...prevItems];
    const currentIndex = selectedIndex;
    const targetIndex =
      direction === 'up'
        ? Math.max(currentIndex - 1, 0)
        : Math.min(currentIndex + 1, newItems.length - 1);

    // If no movement needed, return as-is
    if (currentIndex === targetIndex) return prevItems;

    // Swap items
    const temp = newItems[currentIndex];
    newItems[currentIndex] = newItems[targetIndex];
    newItems[targetIndex] = temp;

    // Update selectedIndex and notify parent
    setSelectedIndex(targetIndex);
    onItemSelect(newItems[targetIndex].title);

    return newItems;
  });
};


  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = [...items];
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setItems(reordered);
    setSelectedIndex(result.destination.index);
    onItemSelect(reordered[result.destination.index].title);
  };

  const getColorFromCode = (code) => {
    const colorMap = {
      BL: 'black',
      RD: 'red',
      BU: 'blue',
      GN: 'green',
      OR: 'orange',
      PR: 'purple',
      BR: 'brown',
    };
    return colorMap[code] || 'gray';
  };

  const fullText = 'Use arrows or drag to reorder,Click a module to edit.';
  const [beforeComma, afterComma] = fullText.split(',');

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    outline: 'none',
  };

  return (
    <Box
      sx={{
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #ddd',
        boxShadow: 2,
        p: 1,
      }}
    >
      {/* Header */}
      <Box sx={{ p: 1 }}>
        <Typography variant="h6" gutterBottom>
          Organise/Edit Modules
        </Typography>
        <Typography variant="caption" display="block" sx={{ lineHeight: 1 }}>
          {beforeComma},
        </Typography>
        <Typography variant="caption">{afterComma}</Typography>
      </Box>

      {/* List */}
      <Box sx={{ flexGrow: 1, overflow: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="module-list">
            {(provided) => (
              <List ref={provided.innerRef} {...provided.droppableProps}>
                {items.map((item, index) => {
                  const isSelected = selectedIndex === index;
                  const iconColor = isSelected ? 'white' : '#1976d2';

                  const renderArrows = () => {
                    if (index === 0) return null;
                    if (index === 1) {
                      return (
                        <IconButton size="small" sx={{ color: iconColor, ml: 4 , pl: 1 }} onClick={() => scrollList('down')}>
                          <SouthIcon />
                        </IconButton>
                      );
                    }
                    if (index === items.length - 1) {
                      return (
                        <IconButton size="small" sx={{ color: iconColor }} onClick={() => scrollList('up')}>
                          <NorthIcon />
                        </IconButton>
                      );
                    }
                    return (
                      <Box sx={{ display: 'flex' }}>
                        <IconButton size="small" sx={{ color: iconColor }} onClick={() => scrollList('up')}>
                          <NorthIcon />
                        </IconButton>
                        <IconButton size="small" sx={{ color: iconColor }} onClick={() => scrollList('down')}>
                          <SouthIcon />
                        </IconButton>
                      </Box>
                    );
                  };

                  return (
                    <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                      {(provided) => (
                        <ListItemButton
                          ref={(el) => {
                            itemRefs.current[index] = el;
                            provided.innerRef(el);
                          }}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          selected={isSelected}
                          onClick={() => handleListItemClick(index)}
                          sx={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            border: '1px solid',
                            borderColor: 'divider',
                            height: 50,
                            m: 0.5,
                            borderRadius: 2,
                            color: isSelected ? 'white' : 'black',
                            '&.Mui-selected': {
                              backgroundColor: '#1976d2',
                              color: 'white',
                            },
                                                      
                            '&.Mui-selected:hover': {
                              backgroundColor: '#1976d2', // Same blue background on hover
                              color: 'white',             // Still white text on hover
                            },

                          }}
                        >
                            <DragIndicatorIcon
                                fontSize="small"
                                sx={{
                                  height: '100%',
                                  position: 'absolute',
                                  left: -1,
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  color: 'lightslategray',
                                  backgroundColor: 'divider',
                                  borderRadius: '6px 0 0 6px',
                                  padding: '2px 0 2px 0',
                                  
                                }}
                              />
                          {/* Left content */}
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            
                            

                            <Typography
                              variant="caption"
                              sx={{
                                width: 20,
                                height: 20,
                                textAlign: 'center',
                                mr: 1,
                                ml: 1,
                                backgroundColor: isSelected ? 'white' : 'divider',
                                color: '#808080',
                                borderRadius: 10,
                              }}
                            >
                              {index + 1}
                            </Typography>
                            <Box sx={{ lineHeight: 0.5}}>
                              <Typography variant="body2">{item.title}</Typography>
                              {item.subtitle && (
                                <Typography variant="caption" color={isSelected ? 'white' : '#808080'}>
                                  {item.subtitle}
                                </Typography>
                              )}
                            </Box>
                          </Box>

                          {/* Right content */}
                          <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto', mb: 1, }}>
                            {item.code && (
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mr: 2 }}>
                               
                                  <SquareIcon sx={{ color: getColorFromCode(item.code), fontSize: 8 ,backgroundColor: getColorFromCode(item.code),
                                    width: 12,
                                    height: 12,
                                   mb: 0.25
                                    }} />
                              
                                <Typography variant="caption">{item.code}</Typography>
                              </Box>
                            )}
                            <Box sx={{ width: 50 }}>{renderArrows()}</Box>
                          </Box>
                        </ListItemButton>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </DragDropContext>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          mt: 2,
          p: '2px',
          borderRadius: '25px',
          background: 'linear-gradient(165deg, #00e5ff, #43e97b, #ff6ec4, #ff9800)',
          display: 'inline-block',
        }}
      >
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '23px',
            textTransform: 'none',
            boxShadow: 'none',
            py: '10px',
            '&:hover': { backgroundColor: '#f5f5f5' },
            '&:focus': { outline: 'none', boxShadow: 'none' },
          }}
          onClick={() => setOpen(true)}
        >
          <BallotSharpIcon sx={{ mr: 1 }} />
          Module Library
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={modalStyle}>
            <Typography variant="h6">Module Library</Typography>
            <Typography sx={{ mt: 2 }}>You can display your module-related content here.</Typography>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default LeftPanel;
