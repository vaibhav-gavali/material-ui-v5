import {
  Avatar,
  Fab,
  Modal,
  styled,
  Tooltip,
  Typography,
  Box,
  TextField,
  ButtonGroup,
  Button,
  Skeleton,
} from '@mui/material';
import React from 'react';
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import { useState } from 'react';
import profile from '../assets/vaibhav.jpg';
import { Stack } from '@mui/system';
import { useEffect } from 'react';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const Add = () => {
  const [open, setOpen] = useState(false);
  const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    setTimeout(() => setSkeleton(!skeleton), 5000);
  }, [open]);

  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {skeleton ? (
          <Box
            width={400}
            height={280}
            bgcolor={'background.default'}
            color={'text.primary'}
            p={3}
            borderRadius={5}
          >
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        ) : (
          <Box
            width={400}
            height={280}
            bgcolor={'background.default'}
            color={'text.primary'}
            p={3}
            borderRadius={5}
          >
            <Typography variant="h6" color="gray" textAlign="center">
              Create post
            </Typography>
            <UserBox>
              <Avatar src={profile} sx={{ width: 30, height: 30 }} />
              <Typography fontWeight={500} variant="span">
                Vaibhav Gavali
              </Typography>
            </UserBox>
            <TextField
              sx={{ width: '100%' }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind?"
              variant="standard"
            />
            <Stack direction={'row'} gap={1} mt={2} mb={3}>
              <EmojiEmotions color={'primary'} />
              <Image color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAdd color="error" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>Post</Button>
              <Button sx={{ width: '100px' }}>
                <DateRange />
              </Button>
            </ButtonGroup>
          </Box>
        )}
      </StyledModal>
    </>
  );
};

export default Add;
